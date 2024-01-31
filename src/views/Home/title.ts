import { ref } from 'vue'
export type title = {
  id: number
  title: string
  Etitle: string
}
export const DayMenuTitle = ref<title[]>([
  {
    id: 1,
    title: '早餐',
    Etitle: 'breakfast'
  },
  {
    id: 2,
    title: '午餐',
    Etitle: 'lunch'
  },
  {
    id: 3,
    title: '晚餐',
    Etitle: 'dinner'
  }
])
