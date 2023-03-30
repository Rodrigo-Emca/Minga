import React from 'react'
import './newRole.css'
import NewRoleAuthor from '../../components/NewRolAuthor/NewRoleAuthor'
import NewRoleCompany from '../../components/NewRoleCompany/NewRoleCompany'
import NewRoleIndex from '../../components/NewRoleIndex/NewRoleIndex'

export default function NewRole() {
    return (
        <>
            <div className='newrole'>
                <div className='author-company'>

                    <NewRoleIndex />
                    <NewRoleAuthor/>
                    <NewRoleCompany />
                </div>
                <div className='image-newrole'>

                <div className='newrole-contain'>
                    <h3 className='text-newrole'>
                        Minga.com is the best place to find manga reviews. We´ve been super impress by the quality of applicants.
                    </h3>
                    <p className='quote-newrole'>-- Ignacio Borraz</p>
                </div>

            </div>
            </div>
        </>
    )
}