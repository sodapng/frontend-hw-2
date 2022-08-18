import Star from '../Star/Star'

/** Пропсы, которые принимает компонент Card */
export type CardProps = {
  /** URL изображения */
  image: string
  /** Заголовок карточки */
  title: React.ReactNode
  /** Подзаголовок карточки */
  subtitle: React.ReactNode
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode
  /** Клик на карточку */
  onClick?: React.MouseEventHandler
  countStars?: string
  lastUpdated?: string
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
  countStars,
  lastUpdated,
}) => {
  return (
    <div className="w-96 h-auto" onClick={onClick}>
      <div className="flex items-center gap-3 rounded-md border border-[#D9D9D9] px-2 py-4 transition-all hover:cursor-pointer hover:shadow-md">
        <img src={image} alt="avatar" className="w-20 rounded-full" />
        <div className="text-[#7E7E7E] truncate">
          <div className="text-black font-bold truncate">{title}</div>
          <a href="#" className="hover:text-[#208FBF]">
            {subtitle}
          </a>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <Star />
              <div>{countStars}</div>
            </div>
            <div>{lastUpdated}</div>
          </div>
        </div>
      </div>
      {content && (
        <div className="border rounded-md px-2 py-4 mt-2 border-dashed">
          {content}
        </div>
      )}
    </div>
  )
}

Card.defaultProps = {
  countStars: '123',
  lastUpdated: 'Updated 21 Jul',
}
