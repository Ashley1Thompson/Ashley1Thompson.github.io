import '../styles/App.css';
import React from 'react'
import {Container, Header, Grid,} from 'semantic-ui-react'
// import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { Page, Document } from 'react-pdf';
import myResume from '../assets/pdf/dev-resume2022.pdf'

const Resume = () => {
  return(
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header className='header' as='h1'>resume</Header>
            <Document file={myResume}>
              <Page pageNumber={1} />
            </Document>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>            
        </Grid.Row>
      </Grid>
    </Container>

  )
}
 export default Resume