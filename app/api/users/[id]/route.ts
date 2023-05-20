import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (
  req: Request,
  context: { params: { id: string } }
) => {
  console.log("params", context);
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: context.params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
