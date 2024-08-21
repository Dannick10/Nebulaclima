import React from 'react'

const Skeleton = () => {


  const renderTable = () => {
    const rows = []

    for(let i = 0; i <= 6; i++) {
      rows.push( <tr key={i}>
        <td className="flex gap-2" key={i}>
          <span className='py-1'></span>
          <p className='py-1'></p>
        </td>
        <td></td>
      </tr>)
    }

    return rows
  }

  return (
    <div className='skeleton min-h-screen'>
      <section className="hero min-h-52">
        <div className="hero-content flex items-center justify-center">
          <span className="flex items-center justify-center relative">
          
          </span>
          <h1 className="text-5xl font-bold"></h1>
        </div>
        <div className="hero-overlay p-2">
          <p></p>
        </div>
      </section>
      <section className="hero">
        <div className="hero-overlay justify-center flex">
         
        </div>
        <div className="hero-content pt-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold"></h1>
              <span>
               
              </span>
            </div>
          
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold"></h1>
              <span>
              
              </span>
            </div>
           
          </div>
        </div>
      </section>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <tbody>
            {renderTable()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Skeleton