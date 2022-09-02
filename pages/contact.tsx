import React from "react";
import { contentfulClient } from "../config/contentful";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
function ContactPage({ contactPhoto }) {
  return (
    <div className="mx-auto w-full mb-8 md:h-screen max-w-[1440px] ">
      <div className="flex flex-col h-full ">
        <div className="ml-8 ">
          <h1 className="text-7xl md:text-8xl font-extralight">KONTAKT</h1>
        </div>
        <div className="max-w-[1240px] mx-auto w-full  md:h-screen mt-8">
          <div className=" flex justify-center ">
            <div className=" hidden md:block w-1/3 shadow-xl">
              <img src={contactPhoto} />
            </div>
            <div className="flex flex-col justify-between h-[600px] md:h-auto  w-2/3 md:w-1/5 font-extralight bg-gray-100 shadow-xl">
              <div className="flex flex-col items-center h-full justify-center">
                <AiOutlinePhone size={50} />
                <h3 className="text-sm mt-3">+48 232 123 432</h3>
              </div>
              <div className="flex flex-col items-center h-full justify-center border-y-2 border-gray-300">
                <AiOutlineMail size={50} />
                <h3 className="text-sm mt-3">fotograf@gmail.com</h3>
              </div>
              <div className="flex flex-col items-center h-full justify-center">
                <GoLocation size={50} />
                <h3 className="text-sm mt-3">PMI</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const resContactPhoto: any = await contentfulClient.getEntries({
    content_type: "contactPhoto",
  });

  return {
    props: {
      contactPhoto:
        resContactPhoto.items[0].fields.contactPhoto.fields.file.url,
    },
  };
};
export default ContactPage;
