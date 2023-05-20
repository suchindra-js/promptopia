import { FC, SetStateAction } from "react";
import PromptCard from "./PromptCard";
import { IPrompt } from "@models/prompt";

interface Props {
  name: string;
  desc: string;
  data: IPrompt[];
  handleEdit?: (post: IPrompt) => void;
  handleDelete?: (post: IPrompt) => Promise<void>;
}

const Profile: FC<Props> = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log(data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            handleTagClick={function (tagName: SetStateAction<string>): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
