import React from 'react'
import { getExperiences } from "@/sanity/queries";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import { PortableText } from '@portabletext/react';

export async function Experiences() {
	let experiences = await getExperiences();

	experiences = experiences.sort((a: any, b: any) => {
		return b.key - a.key
	})

	return (
		<div className="w-full px-2 flex flex-col items-center justify-start">
			<div className="w-full max-w-4xl flex flex-col items-center justify-evenly">
				{experiences.map((experience: any) => (
					<Card className="w-full mb-6 p-2" key={experience.key}>
						<CardHeader>
							<h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>{experience.title}</h1>
							<h2 className='text-lg font-semibold md:text-xl lg:text-2xl '>{experience.company}</h2>
						</CardHeader>
						<CardContent>
							<span className="mb-4 flex w-full max-w-lg">
								<h3 className='text-md'>{experience.start}</h3>
								&nbsp;<p>-</p>&nbsp;
								<h3 className='text-md'>{experience.end ? experience.end : "Present"}</h3>
							</span>
							<Separator className='my-2 w-full' />
							<PortableText value={experience.description} />
						</CardContent>
						<CardFooter>
							<div className="w-full flex flex-wrap justify-start items-center">
								{experience.skills.map((skill: any, index: number) => (
									<Badge className='mx-1 mb-1' key={index}>{skill.title}</Badge>))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
