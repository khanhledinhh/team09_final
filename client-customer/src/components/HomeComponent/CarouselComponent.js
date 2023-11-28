import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100' height={600}
        src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/404387607_1548086619269473_8363105735894377256_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jvTA_CgvqOEAX9M1TKs&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfC9ppEzajlvD5f-xn7ufz7Nud7VEMO6SJrHgcWXaELU9A&oe=65697046" alt='First slide'/>



      </Carousel.Item>
      <Carousel.Item interval={500}> 
        <img className='d-block w-100' height={600} 
        src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/405228869_1550394135705388_3045981980638986145_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gFMnqy057uwAX-aLp_M&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfALumFietserJqwlLAuIM2cxuVQnLKYyymH7v4ScMBrXA&oe=656AB872" alt='Second slide'/>
 
        
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' height={600}
        src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/405260664_1550394125705389_1585740242629924756_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R6Alzt373PYAX_T4xR_&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfDhLfbdb-nn3FGd6ip6_p2_bgMcDEx57o4d4NIU64f0OA&oe=656AE6DB" alt='First slide'/>

      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;