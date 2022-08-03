import React from "react";
import "./workspace-setup.css";
import { useNavigate } from "react-router-dom";
import { useStepContext } from "../../context/stepContext";
import { HiUserGroup } from "react-icons/hi";
import { RiUserFill } from "react-icons/ri";

function WorkspaceSetup() {
  const { setStep } = useStepContext();
  const navigate = useNavigate();
  return (
    <section className="main-container center">
      <div>
        <h3 className="main-heading">How are you planning to use Eden?</h3>
        <p className="sub-heading">
          We'll streamline your setup experience accordingly.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep((prev) => prev + 1);
          navigate("/success");
        }}
        className="flex flex-col gap-md pad-xl"
      >
        <div className="flex gap-md">
          <div className="flex-1">
            <div className="flex-col gap-sm">
              <span className="icon">
                <RiUserFill />
              </span>
              <b>For myself</b>
              <p className="gray">
                Write bette. Think more clearly. Stay organized.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex-col gap-sm">
              <span className="icon">
                <HiUserGroup />
              </span>
              <b className="">With my team</b>
              <p className="gray">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </div>
        </div>
        <input className="submit-btn" type="submit" value="Create Workspace" />
      </form>
    </section>
  );
}

export { WorkspaceSetup };
