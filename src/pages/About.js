import { Box, CardContent, Link, Typography } from '@mui/material'
import PageTitle from '../components/PageTitle'
import image from '../images/foto.jpg'

function About() {
	return (
		<>
			<PageTitle>About me</PageTitle>

			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				<Box
					component="img"
					sx={{
						border: '2px solid',
						borderColor: 'sand.light',
						mt: 1,
						borderRadius: '8px',
						width: '200px',
					}}
					src={image}
					alt="my face"
				/>

				{/* <Box component="img" src={image} alt="my face" sx={{ width: 200 }} /> */}
				<Box>
					<CardContent>
						<Typography component="div" variant="h5">
							Hi! I'm Paweł. Welcome to my first page!
						</Typography>
						<Typography
							variant="subtitle1"
							color="grey"
							component="p"
							sx={{ textAlign: 'justify', my: 1 }}
						>
							I made first version of this page back in 2019 in order to test
							and present the skills and knowledge acquired by me during one
							year of learning web development. The{' '}
							<Link
								href="https://github.com/pawelsan/galactic-react-page"
								target="_blank"
								sx={{
									color: 'grey',
								}}
							>
								current version
							</Link>{' '}
							of this app, made in 2023, showcases my development as a front-end
							software engineer with almost 3 years of commercial experience. It
							is a Single Page Application made with React, React Router, and
							MUI library.
						</Typography>
						<Typography
							variant="subtitle1"
							color="grey"
							component="p"
							sx={{ textAlign: 'justify', mb: 1 }}
						>
							It took me a while before realizing that web development is the
							field that I am passionate about and a career path that I want to
							follow. For almost ten preceeding years before 2020, I was working
							as an analyst, mainly in public sector. I started learning web
							development in September 2018, devoting most of my free time to
							this end. I have been following a variety of sources including
							online courses from Udemy and Frontend Masters.
						</Typography>
						<Typography
							variant="subtitle1"
							color="grey"
							component="p"
							sx={{ textAlign: 'justify' }}
						>
							I do hope that you will enjoy references to the Star Wars
							universe. Please feel free to contact me through the social media
							links in the footer.
						</Typography>
					</CardContent>
				</Box>
			</Box>
		</>
	)
}

export default About
