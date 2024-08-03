import { Table } from 'antd'
import React from 'react'

const {Column,Summary} = Table

const ProductView = () => {
  return (
    <>
      <div className='container'>
        <Table >
            <Column title={"id"} />
        </Table>
      </div>
    </>
  )
}

export default ProductView