import { Topic } from "../support/types";

export const topic: Topic[] = [
  {
    id: "background",
    name: "Background",
    description: "These questions will ask general questions about your background, that might be relevant to how people understand your career",
  },
  {
    id: "advice",
    name: "Advice",
    description: "These questions will ask you to give some general advice to newcomers interested in entering into your field",
  },
  {
    id: "idle",
    name: "Idle",
    description: '30-second idle clip',
  },
  {
    id: "intro",
    name: "Intro",
    description: 'Short introduction about you',
  },
  {
    id: "off_topic",
    name: "Off-Topic",
    description: 'Short responses to off-topic questions you do not have answers for or do not understand',
  }
]
export default topic;