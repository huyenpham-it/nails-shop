import { LazyShow } from '@/components';
import { SectionEight, SectionFive, SectionFour, SectionNine, SectionOne, SectionSeven, SectionTen, SectionThree, SectionTwo } from './home';
import SectionSix from './home/SectionSix/SectionSix';

export default function Home() {
	return (
		<main>
			<LazyShow>
				<SectionOne />
			</LazyShow>

			<LazyShow>
				<SectionTwo />
			</LazyShow>

			<LazyShow>
				<SectionThree />
			</LazyShow>

			<LazyShow>
				<SectionFour />
			</LazyShow>

			<LazyShow>
				<SectionFive />
			</LazyShow>

			<LazyShow>
				<SectionSix />
			</LazyShow>

			<LazyShow>
				<SectionSeven />
			</LazyShow>
			
			<LazyShow>
				<SectionEight />
			</LazyShow>
			
			<LazyShow>
				<SectionNine />
			</LazyShow>
			
			<LazyShow>
				<SectionTen />
			</LazyShow>
		</main>
	);
}
