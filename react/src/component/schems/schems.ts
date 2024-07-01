export type Profile = {
    firstName: string
    lastName: string
    profession: string
    age: number
    email: string
    availability: string
    city: string
    country: string
    about: string
    youtube: string
    linkedin: string
    facebook: string
    instagram: string
}

export type Education = {
    title: string
    period: string
    institution: string
}

export type Experiency = {
    title: string
    period: string
    company: string
    description: string
    tecnologies: string[]
}

export type Skill = {
    name: string
    level: number
}

export type ResumeInfo = {
    education: Education[],
    experiencies: Experiency[],
    skills: Skill[]
}

