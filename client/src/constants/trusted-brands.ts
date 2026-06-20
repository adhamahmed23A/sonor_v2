const BASE_URL = "https://www.untitledui.com/logos/logotype";

interface TrustedLogo {
  name: string;
  slug: string;
  lightSrc: string;
  darkSrc: string;
}

function createLogo(name: string, slug: string): TrustedLogo {
  return {
    name,
    slug,
    lightSrc: `${BASE_URL}/color/${slug}.svg`,
    darkSrc: `${BASE_URL}/white/${slug}.svg`,
  };
}

export const TRUSTED_LOGOS: TrustedLogo[] = [
  createLogo("Odeao Labs", "odeao-labs"),
  createLogo("Kintsugi", "kintsugi"),
  createLogo("Magnolia", "magnolia"),
  createLogo("Warpspeed", "warpspeed"),
  createLogo("Sisyphus", "sisyphus"),
  createLogo("Layers", "layers"),
  createLogo("Catalog", "catalog"),
  createLogo("Quotient", "quotient"),
  createLogo("Circooles", "circooles"),
  createLogo("Hourglass", "hourglass"),
];
