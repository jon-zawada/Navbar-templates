import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({n: 3})
  const number = searchParams.get('n');
  return (
    <>
      <Outlet context={{hello: 'world'}}/>
      <Link to='/books/1'>Book 1</Link>
      <br/>
      <Link to='/books/2'>Book 2</Link>
      <br/>
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br/>
      <Link to='/books/new'>New Book</Link>
      <input type='number' onChange={(e)=> setSearchParams({n: e.target.value})}/>
    </>
  )
}