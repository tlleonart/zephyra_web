// src/modules/home/components/sections/team-section/team-content.tsx

import { FC } from "react";
import { EmployeeCard } from "../../employee-card";
import { employeeService } from "@/modules/employee/services/employeeService";
import { ErrorState } from "./error-state";
import { EmptyState } from "./empty-state";
import { Carousel } from "@/modules/shared/components/carousel";
import { TeamCallToAction } from "./team-call-to-action";

/**
 * Contenido principal del equipo que usa el servicio en server component
 */
export const TeamContent: FC = async () => {
  try {
    // Usar el servicio directamente en Server Component
    const response = await employeeService.getEmployeesForSSR({
      limit: 12,
      sortBy: "id",
      sortOrder: "asc",
      includeBlogCount: true,
    });

    if (!response.success || response.data.length === 0) {
      return <EmptyState />;
    }

    const employees = response.data;

    return (
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Carousel principal */}
        <Carousel
          itemsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
          autoPlay={true}
          autoPlayInterval={5000}
          loop={true}
          showDots={true}
          showArrows={true}
          showProgress={true}
          gap="gap-6"
          className="mb-12"
          ariaLabel="Carousel del equipo de trabajo"
        >
          {employees.map((employee, index) => (
            <EmployeeCard
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              specialty={employee.specialty}
              image={employee.image}
              blogCount={employee.blogCount}
              priority={index < 3} // Priorizar primeras 3 imágenes
              interactive={true}
              className="transform hover:scale-[1.02] transition-transform duration-300"
            />
          ))}
        </Carousel>

        {/* Información adicional */}
        <div className="text-center space-y-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nuestro equipo multidisciplinario combina{" "}
              <strong>experiencia técnica</strong> con
              <strong> creatividad innovadora</strong> para entregar soluciones
              que realmente transforman negocios. Cada miembro aporta su
              expertise única para hacer realidad tus proyectos más ambiciosos.
            </p>
          </div>
          <TeamCallToAction />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading team:", error);
    return <ErrorState />;
  }
};
