import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Divider } from '@mui/material';
import styled from 'styled-components';


// Example content for each section
const AboutUs = () => (
  <Box mt={2} p={3}>
    <Typography variant="h3" gutterBottom>
      AboutUs
    </Typography>
    <Typography variant="body1" paragraph>
    ICTer International Conference is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researchers and practitioners alike to present research results and practical deployment in the computer science and information technology domains.  High-quality papers accepted for presentation at the ICTer conference are potentially eligible for publication in a special issue of the Journal of the National Science Foundation (JNSF). Papers that are accepted to be presented at 
    the conference, but not published in the JNSF, will be published in the ICTer journal.    </Typography>
    
    <StyledDivider />
   
  </Box>
);
const History = () => (
  <Box mt={2} p={3}>
    <Typography variant="h4" gutterBottom>
      Our History
    </Typography>
    <Typography variant="body1" paragraph>
    <p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
      <strong>ICTer2023</strong><br />
      The 22nd ICTer International Conference (ICTer2022) was held from 07th – 10th November 2023 in Colombo, Sri Lanka.
      ICTer International Conference is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998.
      The ICTer conference is a unique opportunity for researchers and practitioners alike to present research results and practical deployment in the computer science and information technology domains.
      High-quality papers accepted for presentation at the ICTer conference are potentially eligible for publication in a special issue of the Journal of the National Science Foundation (JNSF).
      Papers that are accepted to be presented at the conference, but not published in the JNSF, will be published in the ICTer journal.
    </p>



<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2022</strong><br />
The 22nd ICTer International Conference (ICTer2022) was held from 30th November – 01st December 2022 in Colombo, Sri Lanka. ICTer is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researchers and practitioners alike to present research results and practical deployment in the Computer Science and Information Technology domains. Selected papers will be invited for publication in the special issue of the ICTer Journal (journal.icter.org). All presented full papers will be submitted to IEEE Xplore digital library.
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2021</strong><br />
The 21th International Conference on Advances in ICT for Emerging Regions (ICTer2021) was held from 02nd – 03rd December 2021 in Colombo, Sri Lanka. ICTer is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researchers and practitioners alike to present research results and practical deployment in the Computer Science and Information Technology domains. Selected papers will be invited for publication in the special issue of the ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2020</strong><br />
The 20th International Conference on Advances in ICT for Emerging Regions (ICTer2020) was held from 05th – 06th November 2020 in Colombo, Sri Lanka. ICTer is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researchers and practitioners alike to present research results and practical deployment in the Computer Science and Information Technology domains. Selected papers will be invited for publication in the special issue of the ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2019</strong><br />
We are pleased to announce that the 19th International Conference of Advances in ICT for Emerging Regions (ICTer2019) will be held from 03rd to 04th September 2019 in Colombo, Sri Lanka. ICTer is technically co-sponsored by IEEE Sri Lanka section and is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researcher and practitioners alike to present research and development activities in the Computer Science and Information and Communication Technology domains. The Proceedings of the conference will be published in book form and all presented papers and abstracts will be submitted to IEEE Xplore. Selected papers will be invited for publication in the special issue of the ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2018</strong><br />
The 18th International Conference of Advances in ICT for Emerging Regions (ICTer2019) was be held from 03rd to 04th September 2018 in Colombo, Sri Lanka. ICTer is technically co-sponsored by IEEE Sri Lanka section and is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researcher and practitioners alike to present research and development activities in the Computer Science and Information and Communication Technology domains. The Proceedings of the conference will be published in book form and all presented papers and abstracts will be submitted to IEEE Xplore. Selected papers will be invited for publication in the special issue of the ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2017</strong><br />
We are pleased to announce that the 17th International Conference of Advances in ICT for Emerging Regions (ICTer2017) will be held from 7th to 8th September 2017 in Colombo, Sri Lanka. ICTer is technically co-sponsored by IEEE Sri Lanka section and is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. The ICTer conference is a unique opportunity for researcher and practitioners alike to present research and development activities in the Computer Science and Information and Communication Technology domains. The Proceedings of the conference will be published in book form and all presented papers and abstracts will be submitted to IEEE Xplore. Selected papers will be invited for publication in the special issue of the ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2016</strong><br />
The 16th International Conference on Advances in ICT for Emerging Regions (ICTer2016) has been held from 1st to 3rd September 2016 in Negombo, Sri Lanka. It provides a platform where research done in ICT is presented by both local and foreign Computer Scientists and IT Professionals. The conference includes presentation of selected papers, several Keynote Addresses and Invited Speeches by leading personalities in the Computer Science and ICT field. In addition, several post-conference workshops in areas of current interest was held on the 3rd of September. Proceedings of ICTer 2016 are available in IEEE Explore and selected papers is being invited for publication in the special issue of ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2015</strong><br />
ICTer2015 is technically co-sponsored by IEEE Sri Lanka Section and is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. It provides an ideal platform to the researchers and practitioners alike to showcase research and development activities carried out in Computer Science and Information Communication Technology domains. Proceedings of ICTer2015 will be published in both book form and on IEEE Explore. Selected papers will be invited for publication in the special issue of ICTer Journal (journal.icter.org).
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2014</strong><br />
We are pleased to announce that this year’s International Conference on Advances in ICT for Emerging Regions (ICTer2014) will be held in Colombo, Sri Lanka from 10th to 14th December 2014. ICTer2014 is co-sponsored by IEEE Sri Lanka Section and is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. It provides an ideal platform to the researchers and practitioners alike to showcase research and development activities carried out in ICT and CS domains.
</p>
<p style={{ textAlign: 'center' ,  border: '1px solid #ccc',}}>
<strong>ICTer2015</strong><br />
International Conference on Advances in ICT for Emerging Regions (ICTer) is the successor to the seminal International Information Technology Conference (IITC) held in Sri Lanka since 1998. It provides a platform where research done in ICT is presented by both local and foreign Computer Scientists and IT Professionals. This year we have participants from Germany, Australia, Sweden, Japan, New Zealand, Taiwan, United Kingdom, Singapore and India.
</p>
<p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>ICTer 2012</strong><br />
      This year the conference will take place at BMICH, Committee Rooms, Bauddhaloka Mawatha, Colombo 07, Sri Lanka on Thursday 13th and Friday 14th December 2012. In addition to the presentation of selected papers, several Keynote Addresses and Invited Speeches by leading personalities in the IT world will be made. The conference will also include pre-conference (12th) and post-conference (15th) high quality tutorials/workshops in areas of current interest in Information and Communication Technology. A student symposium will be held at the UCSC, 35, Reid Avenue, Colombo 07, Sri Lanka on 13th December 2012.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>ICTer 2011</strong><br />
      International Conference on Advances in ICT for Emerging Regions (ICTer) is the successor to the seminal International Information Technology Conference held in Sri Lanka since 1998, the IITC. It provides a platform where research done in ICT is presented by both local and foreign Computer Scientists and IT Professionals.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>ICTer 2010</strong><br />
      ICTer 2010 succeeded the seminal International Information Technology Conference (IITC) in 2010 to promote wider international participation and computing research in emerging regions, especially in Asia-Pacific. ICTer2010 took place at Cinnamon Lakeside, Colombo, Sri Lanka on 29th – 30th September and 1st October 2010. The conference included selected full papers, extended abstracts, and several Keynote Addresses by leading IT personalities.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>e-Asia 2009</strong><br />
      The Centre for Science, Development and Media Studies (CSDMS), India, and the ICT Agency (ICTA), Sri Lanka, organized the 4th annual eASiA 2009 conference in Colombo, Sri Lanka. The event celebrated 2009 as the year of ICT and English, promoting ICT for Development through strategic planning and knowledge networking.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2008</strong><br />
      9th International Information Technology Conference (IITC) held on 28-29 October 2008 in Colombo, Sri Lanka.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2006</strong><br />
      The International Information Technology Conference was launched in 1998, successfully held every year since then.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2005</strong><br />
      The International Information Technology Conference was initiated in 1998 as part of the declaration of that year as the Year of IT by the Government of Sri Lanka, and has been held annually since.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2004</strong><br />
      The International Conference in e-Governance began in India in 2003 and was later held in Sri Lanka. The event highlighted the significance of e-Governance for improving public service through ICT.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2003</strong><br />
      The fifth International Information Technology Conference (IITC) was held from 1-7 December in Colombo, promoting the vision of an ICT-enabled society under the e-Sri Lanka initiative.
    </p>
    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2002</strong><br />
      In 1992, the Government of Sri Lanka embarked on a program of rapid export-oriented industrialization to accelerate economic growth. Recognizing the critical importance of Information Technology and Telecommunications, they sponsored, for the first time, an International Conference & Exhibition in Colombo. Following on the tremendous success of these, similar events were successfully organized in 1994, 1997, 1998, and 2000.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 2000</strong><br />
      The 3rd International Information Technology Conference (IITC 2000) on “IT - Opportunities for the 21st Century” was held on 17-19 January 2001 in Colombo, Sri Lanka.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 1999</strong><br />
      The 2nd International Information Technology Conference on “IT - The Challenges for the 21st Century” was held from 6-8 October 1999. The conference was preceded by workshops held on 4 & 5 October 1999.
    </p>

    <p style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <strong>IITC 1998</strong><br />
      The 1st International Information Technology Conference was organized by Infotel Lanka Society. The main conference was held on 7-8 October after 3 workshops and 2 tutorial sessions held on 5th and 6th. All papers were peer-reviewed, and abstracts of accepted papers appeared in the Conference Proceedings. The presented full papers are indexed by Google Scholar.
    </p>
   </Typography>
    
    <StyledDivider />
    
  </Box>
);

const Committee = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia
          component="img"
          height="430"
          image="/images/p1.jpg"
          alt="Team Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dr. Asanka
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
         Sayakkara
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chair          </Typography>
          <Typography variant="body2">
          Senior Lecturer, University of Colombo School of Computing, Sri Lanka        </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia
          component="img"
          height="450"
          image="/images/Buddhika.jpg"
          alt="Team Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ms. Buddhika Disanayake
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Secretary
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
          <Typography variant="body2">
          University of Colombo School of Computing, Sri Lanka          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia
          component="img"
          height="450"
          image="/images/p3.jpg"
          alt="Team Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dr. Primal Wijesekera
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Member
          </Typography>
          <Typography variant="body2">
          Senior Lecturer, Research Scientist, International Computer Science Institute (ICSI), University of California, Berkeley, USA          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia
          component="img"
          height="430"
          image="/images/p4.jpg"
          alt="Team Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dr. Sachintha 
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Pitigala
          </Typography>
          <Typography variant="body2" color="text.secondary">
Member          </Typography>
          <Typography variant="body2">
          Senior Lecturer, The Department of Statistics & Computer Science, University of Kelaniya, Sri Lanka          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia
          component="img"
          height="430"
          image="/images/p5.jpg"
          alt="Team Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dr. Kathiravelu           </Typography>
          <Typography gutterBottom variant="h5" component="div">
    Thabotharan
  </Typography>
          <Typography variant="body2" color="text.secondary">
Member          </Typography>
          <Typography variant="body2">
          Senior Lecturer, Department of Computer Science, University of Jaffna, Sri Lanka         </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia
          component="img"
          height="430"
          image="/images/p6.jpg"
          alt="Team Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dr. Viraj Brian Wijesuriya          </Typography>
          <Typography variant="body2" color="text.secondary">
Member          </Typography>
          <Typography variant="body2">
          VP Engineering, Dynamify          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
    
  </Grid>
);

const InnovationStudio = () => (
  <Box mt={2} p={3}>
    <Typography variant="h3" gutterBottom>
    Innovation Studios
    </Typography>
    <Typography variant="body1" paragraph>
    ICTER 2024 Industry partners can run innovation studios at conferences, 
    which are often designed as interactive spaces where attendees can explore
     new technologies and innovations. An innovation studio can provide a platform 
     for tech companies to showcase their latest products, services, and ideas and 
    engage with conference attendees through interactive demonstrations and presentations.    </Typography>
    <Typography variant="body1" paragraph>
    An innovation studio feature a variety of interactive exhibits, such as live 
    product demonstrations. It may also include displays of cutting-edge technologies and prototypes, 
    giving attendees a glimpse into the future of the industry.    </Typography>
    <Typography variant="body1" paragraph>
    Innovation studios can provide a valuable opportunity for tech companies 
    to connect with potential employees, customers and partners, gather 
    feedback on their products and services, and gain insights into the needs 
    and preferences of the industry. They can also help to position the company as a 
    thought leader in the field and build brand awareness among industry professionals and
     academics and young scientists. Overall, running an innovation studio at a conference
      can be a valuable way for tech companies to showcase their latest technologies and innovations,
     engage with industry professionals and academics, and build strategic partnerships and collaborations.    </Typography>
    
    <StyledDivider />
    
  </Box>
);



const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledTabs>
          <StyledNavLink to="AboutUs">
              AboutUs
            </StyledNavLink>
            <StyledNavLink to="history">
              History
            </StyledNavLink>
            <StyledNavLink to="Committee">
              Committee
            </StyledNavLink>
            <StyledNavLink to="InnovationStudio">
              Innovation Studio
            </StyledNavLink>
           
          </StyledTabs>
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="history" element={<History />} />
            <Route path="Committee" element={<Committee />} />
            <Route path="InnovationStudio" element={<InnovationStudio />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>

  );
  
  
};

export default About;

// Styled Components
const StyledCard = styled(Card)`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const StyledTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
  color: #555;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &.active {
    color: #fff;
    background-color: #3f51b5;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 2rem 0;
`;


