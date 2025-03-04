import React from 'react'
const Company = ({id, name, category, start, end}) => {
    return <li key={id} className='italic text-amber-100 font-bold w-50 h-50 bg-blue-600 p-5'>My Company name is {name}, We belong to the {category} sector, and we have been in existence for {end - start} years. </li>
}

const Companies = () => {
    const companies= [
        {id: 1, name: "Company One", category: "Finance", start: 1981, end: 2004},
        {id: 2, name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {id: 3, name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {id: 4, name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {id: 5, name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {id: 6, name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {id: 7, name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {id: 8,  name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {id: 9, name: "Company Nine", category: "Retail", start: 1981, end: 1989}
      ];
      
  return (
    <div className='container bg-gray-500 flex items-center justify-center flex-col'>
        <h1 className='text-3xl text-blue-950 font-bold'>Companies Information</h1>
        <ul className='w-[900px] h-[900px] rounded-2xl flex flex-wrap gap-2'>
            {
                companies.map((company) => <Company id={company.id} name={company.name } category={company.category} start={company.start} end={company.end}/>)
            }
        </ul>
    </div>
  )
}

export default Companies