export const users = [
    {id: 1, name: "Ian Clark"},
    {id: 2, name: "Flaire Sherylle"},
]

export async function GET() {
    return Response.json(users);
}
export async function POST() {

}