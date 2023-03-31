interface Props {
    title: string
    subTitle: string
}

const SectionTitle = ({ title, subTitle }: Props) => {
    return (
        <div>
            {/* SubTitle */}
            <div>{subTitle}</div>
            {/* Title */}
            <h2>{title}</h2>
        </div>
    )
}

export default SectionTitle