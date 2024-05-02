import React, { useEffect } from "react";
import "./about.css";
import blog from "../../images/blog.png";
import Category from "../Blog/Category";

export const About = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex mt-16 gap-8">
      <div className="flex-1">
        <div className="border text-white border-[#383444] rounded-sm overflow-hidden">
          <img className="h-[500px] w-full object-cover" src={blog} alt="" />
          <div className="p-10">
            <h1 className="text-2xl font-bold">BLOG IDEAS</h1>
            <p className="mt-2">
              Undo draft ellipse horizontal bullet. Align pencil ellipse group
              bold slice polygon. Variant community list arrow line plugin
              polygon component. List shadow strikethrough scrolling horizontal.
              Strikethrough effect background selection blur pencil ellipse.
              Text pen thumbnail figjam frame component underline. Edit effect
              arrow ipsum stroke. Pen vector draft rotate frame inspect layer
              hand plugin bullet. Text editor plugin boolean subtract export
              draft rectangle auto. Community prototype thumbnail device
              comment.
            </p>
            <p className="mt-2">
              Outline figma list background project vertical asset fill
              background. Edit overflow distribute link figjam. Flatten plugin
              rectangle ellipse style pen align. Device prototype figma blur
              rotate star. Link library background draft line main device pencil
              rotate horizontal. Slice slice ellipse reesizing overflow.
              Community underline pen font team mask content undo device font.
              Auto plugin comment slice component bullet draft ellipse. Stroke
              editor undo auto reesizing vertical follower bullet. Draft
              community follower pen mask ellipse font line variant library.
              Select figjam effect plugin edit project inspect project blur.
              Library fill arrow pen team frame shadow export. Distribute
              ellipse follower background strikethrough layout rectangle bold
              font. Pen asset stroke share shadow layer line fill. Frame list
              rotate bold union. Slice team edit align create. Rotate library
              pencil hand pen variant follower reesizing subtract move.
            </p>
            <p className="mt-2">
              Draft community follower pen mask ellipse font line variant
              library. Select figjam effect plugin edit project inspect project
              blur. Library fill arrow pen team frame shadow export. Distribute
              ellipse follower background strikethrough layout rectangle bold
              font. Pen asset stroke share shadow layer line fill. Frame list
              rotate bold union. Slice team edit align create. Rotate library
              pencil hand pen variant follower reesizing subtract move.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <Category />
      </div>
    </div>
  );
};
