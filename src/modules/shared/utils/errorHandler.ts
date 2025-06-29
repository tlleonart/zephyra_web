/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from "next/server";
import { ErrorResponse, HttpStatus } from "../types/api.types";
import { Prisma } from "@/app/generated/prisma";

export class ApiError extends Error {
  constructor(
    public message: string,
    public statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR,
    public details?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleApiError(error: unknown): NextResponse<ErrorResponse> {
  console.error("API Error: ", error);

  const errorResponse: ErrorResponse = {
    success: false,
    error: "Error interno del servidor",
    timestamp: new Date().toISOString(),
  };

  if (error instanceof ApiError) {
    errorResponse.error = error.message;
    errorResponse.details = error.details;

    return NextResponse.json(errorResponse, { status: error.statusCode });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        errorResponse.error = "Registro duplicado. Este elemento ya existe.";

        return NextResponse.json(errorResponse, {
          status: HttpStatus.BAD_REQUEST,
        });
      case "P2025":
        errorResponse.error = "Registro no encontrado.";

        return NextResponse.json(errorResponse, {
          status: HttpStatus.NOT_FOUND,
        });

      default:
        errorResponse.error = "Error de base de datos desconocido.";
        errorResponse.details = error.message;

        return NextResponse.json(errorResponse, {
          status: HttpStatus.BAD_REQUEST,
        });
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    errorResponse.error = "Datos de entrada inválidos.";
    errorResponse.details = error.message;

    return NextResponse.json(errorResponse, { status: HttpStatus.BAD_REQUEST });
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    errorResponse.error = "Error de conexión a la base de datos.";

    return NextResponse.json(errorResponse, {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }

  if (error instanceof Error) {
    errorResponse.error = error.message;

    return NextResponse.json(errorResponse, {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }

  errorResponse.error = "Error desconocido.";
  errorResponse.details = String(error);

  return NextResponse.json(errorResponse, {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  });
}

export function validatePaginationParams(searchParams: URLSearchParams) {
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(
    100,
    Math.max(1, parseInt(searchParams.get("limit") || "10", 10))
  );
  const sortBy = searchParams.get("sortBy") || "id";
  const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "desc";

  return { page, limit, sortBy, sortOrder };
}
