// interface es un contrato para poder implenetar un objeto
// Cumplir con propiedades, caracateristias

interface Character {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: {
name: string;
url: string;
    };
    location?: {
      name?: string;
url?: string;
    };
    image?: string;
    episode?: Array<string>
}
export default Character
