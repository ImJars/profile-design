import React from "react";
import InfoProfile from "./infoProfile";
import IconProfile from "./iconProfile";
import { RiAdminLine, RiTwitterXFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineLink, AiOutlineWhatsApp } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";


function Profile() {
  return (
    <>
      <section className="mx-2 text-textPrimary font-sans">
        <div className=" bg-secondary w-full mt-20 rounded-3xl mx-auto">
          <div className="-pb-40">
            <img
              src="https://picsum.photos/200/300"
              alt="profile"
              className="rounded-full w-40 h-40 mx-auto transform -translate-y-20 border-primary border-4"
            />
            <div className="transform -translate-y-20">
              <div className="text-center">
                <h1>
                  <span className="text-2xl font-bold">Legacyier</span>
                </h1>
                <h2 className="flex justify-center items-center">
                  <span className="text-xs font-thin">Creador digital / Modo Desarrollador</span>
                  <RiAdminLine className="text-verified text-sm" />
                </h2>
              </div>
              <div>
                <div className="flex justify-between mx-10 mt-5">
                  <InfoProfile number="9" text="Publicaciones" />
                  <InfoProfile number="1010" text="Seguidores" />
                  <InfoProfile number="110" text="Siguiendo" />
                </div>
                <div className="mt-2 mx-2">
                  <div className="text-center">
                    <h1>
                      <span className="text-sm font-normal">
                        El Instagram official de Legacyier.
                      </span>
                    </h1>
                    <h2>
                      <span className="text-sm font-normal">
                        Desarrollador de Software en Mexico.
                      </span>
                    </h2>
                    <div className="grid grid-cols-2 justify-between mt-2">
                      <button className="flex justify-center items-center space-x-1 bg-tertiary px-2 py-2 mx-1 rounded-full text-white">
                        <HiOutlineLocationMarker />
                        <span className="text-sm font-light">
                          Ciudad de Mexico
                        </span>
                      </button>
                      <button className="flex justify-center items-center space-x-1 bg-tertiary px-2 py-2 mx-1 rounded-full text-white">
                        <AiOutlineLink />
                        <span className="text-sm font-light">Sitio Web</span>
                      </button>
                    </div>
                  </div>
                  {/* <div className="flex justify-between mt-4 mx-2">
                    <IconProfile 
                        icon={<LuFacebook />}
                    />
                    <IconProfile 
                        icon={<AiOutlineWhatsApp />}
                    />
                    <IconProfile 
                        icon={<RiTwitterXFill />}
                    />
                    <IconProfile 
                        icon={<FiLinkedin />}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
