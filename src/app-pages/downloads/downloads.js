import DownloadsTable from './downloads-table/downloads-table';
import AuthRequired from '../../app-components/auth-required';

export default function Downloads() {
  return (
    <AuthRequired>
      <div className='flex-grow w-full mx-auto flex mt-5'>
        <div className='flex-1 min-w-0 flex'>
          <DownloadsTable />
        </div>
      </div>
    </AuthRequired>
  );
}
