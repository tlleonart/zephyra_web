/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  HttpStatus,
  PaginatedResponse,
} from "@/modules/shared/types/api.types";
import {
  ApiError,
  handleApiError,
  validatePaginationParams,
} from "@/modules/shared/utils/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const { page, limit, sortBy, sortOrder } =
      validatePaginationParams(searchParams);

    const allowedSortFields = ["id", "name", "role", "specialty"];

    if (!allowedSortFields.includes(sortBy)) {
      throw new ApiError(
        `Campo de ordenamiento inválido. Campos permitidos: ${allowedSortFields.join(
          ", "
        )}`,
        HttpStatus.BAD_REQUEST
      );
    }

    const role = searchParams.get("role");
    const specialty = searchParams.get("specialty");
    const search = searchParams.get("search");

    const where: any = {};

    if (role) {
      where.role = {
        contains: role,
        mode: "insensitive",
      };
    }

    if (specialty) {
      where.specialty = {
        contains: specialty,
        mode: "insensitive",
      };
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { role: { contains: search, mode: "insensitive" } },
        { specialty: { contains: search, mode: "insensitive" } },
      ];
    }

    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.employee.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    const response: PaginatedResponse<any> = {
      success: true,
      data: employees,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };

    return NextResponse.json(response, { status: HttpStatus.OK });
  } catch (error) {
    return handleApiError(error);
  }
}
