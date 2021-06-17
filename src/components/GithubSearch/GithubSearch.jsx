import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import GithubUser from "../GithubUser/GithubUser";
import Input from "../Input/Input";
import InputWrapper from "../InputWrapper/InputWrapper";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import "./GithubSearch.css";
const GithubSearch = () => {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState({});
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(1);

  const searchGithub = async (q, page = 1) => {
    return axios
      .get(`https://api.github.com/search/users?q=${q}&page=${page}`)
      .then((res) => setQueryResults(res.data));
  };

  useEffect(() => {
    if (query.length === 0) {
      setQueryResults([]);
    }

    if (query.length > 1) {
      const fn = async () => {
        searchGithub(query);
        setSearching(false);
      };

      fn();
    }
  }, [query]);

  return (
    <div className="mt-20  w-full">
      <InputWrapper labelTitle="Search Github">
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
        <div className="mt-4 pb-4">
          <div className="flex items-center mt-2 mb-2 border-t border-gray-400 py-4">
            <p className="font-bold">
              <span className="font-normal">Users:</span>{" "}
              {queryResults.total_count} results
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {queryResults.items &&
              queryResults.items.map((user, id) => (
                <GithubUser user={user} key={user.id} />
              ))}
          </div>
          <Pagination
            pageCount={queryResults.total_count / 30}
            onPageChange={(i) => {
              searchGithub(query, i.selected + 1);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
