import Pulse from "../../atoms/Pulse/Pulse";
import { SkeletonLoadingType } from "./SkeletonLoadingType";

export type SkeletonLoadingProps = {
	type: SkeletonLoadingType,
	width?: number | string,
	height: number,
	isCenter?: boolean,
	isFull?: boolean
}

const SkeletonLoading = ({ type, width, height, isFull, isCenter }: SkeletonLoadingProps) => {
	const renderArea = () => {
		let areaClass = '';
		const isFullClass = isFull ? ' w-full' : ' w-auto';
		const widthStyle = isFull ? '100%' : width
		const center = typeof isCenter !== 'undefined' ? (isCenter ? ' mx-auto' : '') : ''

		if(type === SkeletonLoadingType.round){
			areaClass = ' rounded-full';
		}

		return <div style={{
			height: height,
			width : widthStyle
		}} className={`bg-base-300${center}${areaClass}${isFullClass}`}></div>
	}

	return (
		<Pulse>
			{
				renderArea()
			}
		</Pulse>
	);
}

export default SkeletonLoading;
