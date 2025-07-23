import { fetchAPI } from "../route";

export async function GET(req, { params }) {
    try {
        const { pokemonId } = params;
        const response = await fetchAPI(pokemonId);

        return Response.json({ pokemonData: response });
    } catch (error) {
        return Response.json({ message: error });
    }
}