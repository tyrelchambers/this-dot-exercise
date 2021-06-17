import axios from "axios";
import React, { useEffect, useState } from "react";
import GithubUser from "../GithubUser/GithubUser";
import Input from "../Input/Input";
import InputWrapper from "../InputWrapper/InputWrapper";
import Spinner from "../Spinner/Spinner";
import "./GithubSearch.css";
const GithubSearch = () => {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState({});
  const [searching, setSearching] = useState(false);

  const searchGithub = async (q) => {
    return axios
      .get(`https://api.github.com/search/users?q=${q}`)
      .then((res) => res.data);
  };

  useEffect(() => {
    if (query.length === 0) {
      setQueryResults([]);
    }

    if (query.length > 1) {
      const fn = async () => {
        const results = await searchGithub(query);
        if (results) {
          setQueryResults(results);
          setSearching(false);
        }
      };

      fn();
    }
  }, [query]);

  return (
    <div className="mt-20  w-full">
      <InputWrapper labelTitle="User search">
        <Input
          placeholder="Enter Github username"
          onChange={(e) => {
            setSearching(true);

            setTimeout(() => {
              setQuery(e.target.value);
            }, 1500);
          }}
        />
      </InputWrapper>

      {searching && (
        <div className="mt-4 mb-4">
          <Spinner />
        </div>
      )}

      {!searching && queryResults?.items && (
        <>
          <div className="flex items-center mt-2 mb-2 border-b border-gray-600 pb-2">
            <p className="font-bold">{queryResults.total_count} results</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {queryResults.items &&
              queryResults.items.map((user, id) => (
                <GithubUser user={user} key={user.id} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GithubSearch;
