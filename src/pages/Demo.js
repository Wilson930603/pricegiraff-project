import Search from 'components/Search/Search';
import AllCategories from 'components/Category/AllCategories';

export default function Demo() {
  return (
    <div className="min-h-screen bg-grey-background">
      <div className="container pt-28">
        <Search />
        <AllCategories />
      </div>
    </div>
  );
}
