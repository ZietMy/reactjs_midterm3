import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos";
import { getUserApi, getUserReposApi } from "../../api";
const User = () => {
  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const getUser = async (username) => {
    const userData = await getUserApi(username);
    setUser(userData);
  };
  const getUserRepos = async (id) => {
    const userReposData = await getUserReposApi(id);
    setRepos(userReposData);
  };
  useEffect(() => {
    getUser(id);
    getUserRepos(id);
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return (
    <>
      <button onClick={() => history.goBack()} className="btn btn-light">
        Back to Search
      </button>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={name}
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>{" "}
        <div className="badge badge-success">Following: {following}</div>{" "}
        <div className="badge badge-light">Repository: {public_repos}</div>{" "}
        <div className="badge badge-dark">Gist: {public_gists}</div>{" "}
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;