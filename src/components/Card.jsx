import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "./Pagination";

export const Card = ({ fetched, setFetching }) => {
  const [article, setArticle] = useState([]);
  const [totalResults, setTotalResults] = useState();
  //Store users current page
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  //Get the indexofLast record.
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  //record on current page
  const currentRecords = article.slice(indexOfFirstRecord, indexOfLastRecord);

  //get the number of pages.
  const nPages = Math.ceil(totalResults / recordsPerPage);

  const data = useCallback(async () => {
    await fetch(
      "https://newsapi.org/v2/everything?q=tesla&amp;from=2022-12-04&sortBy=publishedAt&apiKey=YOUR_API_KEY_HERE"
    )
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        setTotalResults(x.totalResults);
        return setArticle([...article, ...x.articles]);
      });
  }, [article]);

  useEffect(() => {
    if (fetched) {
      data();
      setFetching(false);
    }
  }, [fetched]);

  return (
    <div>
      <h1 className='p-6 text-2xl text-red-500 font-bold'>Breaking News!</h1>
      {article.slice(indexOfFirstRecord, indexOfLastRecord).map((x) => {
        return (
          <div
            key={uuidv4()}
            className='m-10 flex justify-center align-center '
          >
            <div className='p-6  rounded border-4'>
              <img
                className='p-6 w-full'
                src={x.urlToImage}
                alt='News'
              />
              <div className=' pl-6 font-bold text-xl'>{x.title}</div>
              <div className='p-2 pl-6 text-base'>
                <p className='pb-2'>Author: {x.author}</p>
                <p> {x.description}</p>
                <p className='pr-4 pt-4'>{x.content}</p>
              </div>
            </div>
          </div>
        );
      })}

      {totalResults > 0 ? (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        "Nothing"
      )}
    </div>
  );
};
