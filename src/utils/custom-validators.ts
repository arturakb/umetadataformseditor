
function validateCountrySubdiv(formData: any, errors: any) {
  const geoUnits = formData?.geographicCoverage?.geographicUnits;

  if (Array.isArray(geoUnits)) {
    geoUnits.forEach((unit, i) => {
      const countryCode = unit?.countryCode;
      const subdivisions = unit?.countrySubdivisionCodes;

      if (!countryCode || !Array.isArray(subdivisions)) {
        return;
      }

      subdivisions.forEach((subCode: string, j: number) => {
        if (typeof subCode !== 'string') return;

        const expectedPrefix = `${countryCode}-`;
        if (!subCode.startsWith(expectedPrefix)) {
          // Attach the error to the specific subdivision entry
          errors
            ?.geographicCoverage
            ?.geographicUnits?.[i]
            ?.countrySubdivisionCodes?.[j]
            ?.addError(
              `Subdivision code "${subCode}" must start with "${expectedPrefix}".`
            );
        }
      });
    });
  }

  return errors;
}

export default function customValidator(formData: any, errors: any) {
  validateCountrySubdiv(formData, errors);
  return errors;
}
