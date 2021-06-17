import axios from "axios";
import { useEffect, useState } from "react";
import { searchGithub } from "../../api/searchGithub";
import GithubUser from "../../components/GithubUser/GithubUser";
import { H1 } from "../../components/Headings/Headings";
import Input from "../../components/Input/Input";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import Hero from "../../layouts/Hero/Hero";
import "./IndexPage.css";

function IndexPage() {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState({});
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (query.length === 0) {
      setQueryResults([]);
    }

    if (query.length > 1) {
      const fn = async () => {
        const results = await searchGithub(query);
        setQueryResults(results);
        setSearching(false);
      };

      fn();
    }
  }, [query]);
  return (
    <div className="w-full">
      <Hero>
        <H1>GitHub User Search</H1>
      </Hero>

      <div className="max-w-screen-xl m-auto flex flex-col items-center mt-20">
        <div className="  w-full">
          <InputWrapper labelTitle="Search Users">
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
                <p className="font-bold">{queryResults.total_count} results</p>
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
      </div>
    </div>
  );
}

export default IndexPage;
