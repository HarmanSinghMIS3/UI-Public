import { MouseEvent } from 'react'

export default function blockActiveLinkClick(event: MouseEvent, isActive: boolean) {
    isActive && event.preventDefault()
}