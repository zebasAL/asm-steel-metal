import { ZodError } from 'zod';

interface GroupedValidationError {
  [key: string]: string;
}

export function groupZodErrors(zodError: ZodError): GroupedValidationError {
  const groupedErrors: GroupedValidationError = {};

  zodError.issues.forEach((issue) => {
    const path = issue.path.join('.');
    const message = issue.message;

    // Agrupar los errores por path
    if (!groupedErrors[path]) {
      groupedErrors[path] = message;
    } else {
      // Si ya hay un error para este path, concatenar los mensajes
      groupedErrors[path] += `, ${message}`;
    }
  });

  return groupedErrors;
}
