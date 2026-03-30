//Build a cargo manifest Validator
 function normalizeUnits(manifest){
 let newmanifest = { ...manifest }; 

  if (newmanifest.unit === "lb") {
    newmanifest.weight = Number((newmanifest.weight * 0.45).toFixed(2));
    newmanifest.unit = "kg";
  }

  return newmanifest;
 }
 function validateManifest(manifest){
   let errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return Object.keys(errors).length === 0 ? {} : errors;

 }
 function processManifest(manifest){
   const errors = validateManifest(manifest);

  
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } 
  
  
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
 }