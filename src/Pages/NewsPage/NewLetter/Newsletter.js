import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CaseStudy from '../CaseStudy/CaseStudy';
import LatestNews from '../LatestNews/LatestNews';

const Newsletter = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [latestNewses, setLatestNewses] = useState([]);

    useEffect(() => {
        fetch('./fakeData/caseStudy.json')
            .then(data => data.json())
            .then(result => setCaseStudies(result))
    }, []);
    useEffect(() => {
        fetch('./fakeData/latestNews.json')
            .then(data => data.json())
            .then(result => setLatestNewses(result))
    }, []);
    return (
        <div>
            <Container className="case-studies">
                <h5>FEATURES GALLERY!</h5>
                <h1 className="fw-bold mb-4">All Our Latest Case Studies.</h1>
                <Row className="row gy-4">
                    {
                        caseStudies.map(caseStudy => <CaseStudy key={caseStudy.id} caseStudy={caseStudy}></CaseStudy>)
                    }
                </Row>
            </Container>
            <Container className="case-studies">
                <h5>LATEST NEWS!</h5>
                <h1 className="fw-bold mb-4">All Our Latest News From Top Wriers.</h1>
                <Row className="row gy-4">
                    {
                        latestNewses.map(latestNews => <LatestNews key={latestNews.id} caseStudy={latestNews}></LatestNews>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;