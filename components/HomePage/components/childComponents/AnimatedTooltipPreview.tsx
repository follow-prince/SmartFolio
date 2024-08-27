'use client'
import React, { useEffect, useState } from 'react'
import { AnimatedTooltip } from '@/components/HomePage/ui/animated-tooltip'
import { Spinner } from '@nextui-org/spinner'
import { Card, CardContent } from '@/components/HomePage/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/HomePage/ui/Carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Person {
  id: number
  name: string
  designation: string
  image: string
}

// Helper function to shuffle an array
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function AnimatedTooltipPreview() {
  const [people, setPeople] = useState<Person[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)

        // Fetch followers
        const followersResponse = await fetch(
          'https://api.github.com/users/follow-prince/followers'
        )
        const followersData = await followersResponse.json()

        // Fetch following
        const followingResponse = await fetch(
          'https://api.github.com/users/follow-prince/following'
        )
        const followingData = await followingResponse.json()

        // Map the data to the expected format
        const followers = followersData.map((follower: any) => ({
          id: follower.id,
          name: follower.login,
          designation: 'Follower',
          image: follower.avatar_url
        }))

        const following = followingData.map((user: any) => ({
          id: user.id,
          name: user.login,
          designation: 'Following',
          image: user.avatar_url
        }))

        // Combine both followers and following, removing duplicates
        const combinedPeopleMap = new Map<number, Person>()

        followers.concat(following).forEach((person) => {
          combinedPeopleMap.set(person.id, person)
        })

        const combinedPeople = shuffleArray(
          Array.from(combinedPeopleMap.values())
        )

        setPeople(combinedPeople)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch data')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center w-full '>
        <Spinner color='danger' />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Carousel
      overFlowing='overflow-visible'
      opts={{
        align: 'end',
        slidesToScroll: 1,
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 1000
        })
      ]}
      className='w-full '
    >
      <CarouselContent className='-ml-1'>
        {people.map((person) => (
          <CarouselItem key={person.id} className='basis-1/5'>
            <div className='p-1'>
              <div>
                <AnimatedTooltip items={[person]} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
