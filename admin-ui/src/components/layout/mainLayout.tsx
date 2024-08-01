import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

const {Content,Footer,Header,Sider} = Layout

const _Layout = () => {
  return (
    <>
        <Layout className='h-screen'>
            <Sider>
            </Sider>
            <Layout>
                <Header></Header>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    </>
  )
}

export default _Layout