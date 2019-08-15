import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components/common'
import {investorFaq} from '../../utils/mockAPI'

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">FAQs</h1>
                <section className="content-body">
                    {investorFaq.map(question => {
                        return (
                            <div>
                                <h4>{question.title}</h4>
                                {question.content.map(content => {
                                    return (
                                        <div>
                                            {content.paragraph.map(paragraph => {
                                                return (
                                                    <div>
                                                        <p>
                                                            {paragraph.text}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
