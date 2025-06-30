/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  PaginatedResponse,
  ApiResponse,
} from "@/modules/shared/types/api.types";

interface GetEmployeesParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  role?: string;
  specialty?: string;
  search?: string;
  includeBlogCount?: boolean;
}

interface GetEmployeeByIdParams {
  includeBlogs?: boolean;
}

export class EmployeeService {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "") {
    if (typeof window === "undefined" && !baseUrl) {
      // Corregir la variable de entorno y agregar fallbacks para Vercel
      this.baseUrl =
        process.env.NEXTAUTH_URL ||
        process.env.VERCEL_URL ||
        `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` ||
        "http://localhost:3000";
    } else {
      this.baseUrl =
        baseUrl ||
        (typeof window !== "undefined" ? window.location.origin : "");
    }
  }

  /**
   * Obtiene empleados con paginación y filtros
   * Funciona tanto en Server Components como Client Components
   */
  async getEmployees(
    params: GetEmployeesParams = {}
  ): Promise<PaginatedResponse<any>> {
    const searchParams = new URLSearchParams();

    if (params.page) searchParams.append("page", params.page.toString());
    if (params.limit) searchParams.append("limit", params.limit.toString());
    if (params.sortBy) searchParams.append("sortBy", params.sortBy);
    if (params.sortOrder) searchParams.append("sortOrder", params.sortOrder);
    if (params.role) searchParams.append("role", params.role);
    if (params.specialty) searchParams.append("specialty", params.specialty);
    if (params.search) searchParams.append("search", params.search);

    const url = `${this.baseUrl}/api/employees?${searchParams.toString()}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Agregar configuración específica para server-side
        ...(typeof window === "undefined" && {
          cache: "no-store",
        }),
      });

      if (!response.ok) {
        // Mejorar el manejo de errores para debugging
        const errorText = await response.text();
        console.error(`API Error: ${response.status} - ${errorText}`);
        throw new Error(
          `HTTP error! status: ${response.status}, body: ${errorText}`
        );
      }

      const data: PaginatedResponse<any> = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching employees:", {
        error,
        url,
        baseUrl: this.baseUrl,
        params,
      });

      throw new Error(
        error instanceof Error
          ? error.message
          : "Error desconocido al obtener empleados"
      );
    }
  }

  /**
   * Obtiene un empleado específico por ID
   */
  async getEmployeeById(
    id: number,
    params: GetEmployeeByIdParams = {}
  ): Promise<ApiResponse<any>> {
    if (!id || id <= 0) {
      throw new Error("ID del empleado es requerido y debe ser positivo");
    }

    const searchParams = new URLSearchParams();
    if (params.includeBlogs) searchParams.append("includeBlogs", "true");

    const url = `${
      this.baseUrl
    }/api/employees/${id}?${searchParams.toString()}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        ...(typeof window === "undefined" && {
          cache: "no-store",
        }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Empleado con ID ${id} no encontrado`);
        }
        const errorText = await response.text();
        console.error(`API Error: ${response.status} - ${errorText}`);
        throw new Error(
          `HTTP error! status: ${response.status}, body: ${errorText}`
        );
      }

      const data: ApiResponse<any> = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching employee ${id}:`, {
        error,
        url,
        baseUrl: this.baseUrl,
      });
      throw new Error(
        error instanceof Error
          ? error.message
          : `Error desconocido al obtener empleado ${id}`
      );
    }
  }

  /**
   * Métodos de conveniencia
   */
  async getEmployeesByRole(
    role: string,
    params: Omit<GetEmployeesParams, "role"> = {}
  ) {
    if (!role || role.trim().length === 0) {
      throw new Error("Rol es requerido");
    }
    return this.getEmployees({ ...params, role: role.trim() });
  }

  async getEmployeesBySpecialty(
    specialty: string,
    params: Omit<GetEmployeesParams, "specialty"> = {}
  ) {
    if (!specialty || specialty.trim().length === 0) {
      throw new Error("Especialidad es requerida");
    }
    return this.getEmployees({ ...params, specialty: specialty.trim() });
  }

  async searchEmployees(
    searchTerm: string,
    params: Omit<GetEmployeesParams, "search"> = {}
  ) {
    if (!searchTerm || searchTerm.trim().length === 0) {
      throw new Error("Término de búsqueda es requerido");
    }
    return this.getEmployees({ ...params, search: searchTerm.trim() });
  }

  /**
   * Método especializado para Server Components
   * Garantiza que los datos están optimizados para SSR
   */
  async getEmployeesForSSR(options: GetEmployeesParams = {}) {
    const defaultOptions: GetEmployeesParams = {
      limit: 12,
      sortBy: "name",
      sortOrder: "asc",
      includeBlogCount: true,
      ...options,
    };

    return this.getEmployees(defaultOptions);
  }

  /**
   * Método para obtener empleados featured (los más activos)
   */
  async getFeaturedEmployees(limit: number = 6) {
    return this.getEmployees({
      limit,
      sortBy: "id",
      sortOrder: "asc",
    });
  }
}

export const employeeService = new EmployeeService();

export default employeeService;
