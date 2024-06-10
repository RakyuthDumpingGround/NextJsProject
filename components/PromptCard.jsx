"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter,usePathname } from "next/navigation";

const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}) => {

  const [copied,setCopied] = useState("");
  const {data:session} = useSession();
  const pathName = usePathname();
  const Router = useRouter();

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pinter">
          <Image
            src = {post.creator.image}
            alt="user_image"
            width={40}
            height={40}
          />
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900">
            {post.creator.username}
          </h3>
          <p className="font-satoshi font-light text-gray-500">
            {post.creator.email}
          </p>
        </div>
        </div>
        <div className="copy_btn" onclick={() => {}}>
          <Image
            src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="font-satoshi my-4 text-sm text-gray-500">
        {post.prompt}
       </p>
      <p className="font-inter text-sm text-gray-500 blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick}>#{post.tag}</p>

      {/* Check if the user is the owner of the post and if the user is in the profile page */}
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard