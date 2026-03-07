import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiFileText, FiHome, FiSearch } from "react-icons/fi";
import { Styled } from "./styled";

const NotFound = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="notFoundCard">
                <div className="iconBadge">
                    <FiFileText />
                </div>

                <p className="eyebrow">404 error</p>

                <h1>Page not found</h1>

                <p className="description">
                    The page you are trying to open does not exist, may have
                    been moved, or the route may be incorrect.
                </p>

                <div className="metaRow">
                    <div className="metaItem">
                        <FiSearch />
                        <span>Check the URL</span>
                    </div>
                    <div className="metaItem">
                        <FiFileText />
                        <span>Open another topic</span>
                    </div>
                </div>

                <div className="actionRow">
                    <Link to="/" className="primaryAction">
                        <FiHome />
                        <span>Go to Home</span>
                    </Link>

                    <button
                        type="button"
                        className="secondaryAction"
                        onClick={() => window.history.back()}
                    >
                        <FiArrowLeft />
                        <span>Go Back</span>
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default NotFound;
