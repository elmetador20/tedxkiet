"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin } from "lucide-react"

import { teamMembers, TeamMember } from "@/data/members"


export default function TeamClient() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* HERO */}
      <div className="relative w-full h-screen">
        <Image
          src="/tedgroup.jpeg"
          alt="TEDxKIET Team"
          fill
          priority
          className="object-cover opacity-50 grayscale"
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black via-black/80 to-transparent z-10" />

        <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white">
           MEET OUR <span className="text-red-600">TEAM</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
            Meet the passionate people behind TEDxKIET
          </p>
        </section>
      </div>

      {/* TEAM */}
      <section className="py-20">
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-black via-red-900 to-black" />

        <div className="container mx-auto px-6 space-y-16">
          <TeamSection
            title="Leadership"
            members={teamMembers.slice(0, 2)}
            big
            cols="md:grid-cols-2"
          />

          <TeamSection
            title="Core Leadership"
            members={teamMembers.slice(2, 8)}
            cols="lg:grid-cols-3"
          />

          <TeamSection
            title="Team Heads"
            members={teamMembers.slice(8, 17)}
            cols="lg:grid-cols-3"
          />

          <TeamSection
            title="Core Members"
            members={teamMembers.slice(17)}
            cols="lg:grid-cols-3"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Want to Join Our Team?
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          We are always looking for motivated people to work with us.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold text-white transition hover:scale-105"
        >
          Home <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}

/* ================= COMPONENTS ================= */

interface SectionProps {
  title: string
  members: TeamMember[]
  cols: string
  big?: boolean
}

function TeamSection({ title, members, cols, big }: SectionProps) {
  return (
    <div className="border-b-2 border-white rounded-2xl p-8 bg-black/40 backdrop-blur">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        {title}
      </h2>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-10`}>
        {members.map((member) => (
          <MemberCard
            key={member.name}
            member={member}
            big={big}
          />
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  member: TeamMember
  big?: boolean
}

/* ================= MEMBER CARD ================= */

function MemberCard({ member, big }: CardProps) {
  const [active, setActive] = useState(false)

  return (
    <div
      onClick={() => setActive(!active)}
      className="group flex flex-col items-center text-center cursor-pointer select-none"
    >
      {/* Image */}
      <div
        className={`${big ? "w-60 h-60" : "w-59 h-59"} rounded-full overflow-hidden border-4 border-red-500 shadow-lg relative`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 180px, 240px"
          className={`
            object-cover
            transition
            duration-500

            ${active ? "scale-110 grayscale-0" : "grayscale"}

            group-hover:scale-110
            group-hover:grayscale-0
          `}
        />
      </div>

      {/* Name + Linkedin */}
      <div className="mt-4 flex items-center gap-2">
        <h3
          className={`
            ${big ? "text-2xl" : "text-lg"}
            font-bold
            transition

            ${active ? "text-red-400" : "text-white"}

            group-hover:text-red-400
          `}
        >
          {member.name}
        </h3>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>

      <p className="text-gray-400 text-sm mt-1">
        {member.role}
      </p>
    </div>
  )
}
