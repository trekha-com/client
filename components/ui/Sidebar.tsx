import { cn } from '@/lib/utils';

const channels = [{ name: 'Channel 1' }, { name: 'Channel 2', active: true }, { name: 'Channel 3' }, { name: 'Channel 4' }];

export const Siderbar = () => {
  return (
    <div className='h-full p-4 max-w-sm'>
      <div className='bg-gray-100 h-full p-4 rounded-md shadow-sm flex flex-col gap-8'>
        {/* Logged User */}
        <div className='hover:bg-gray-200 rounded-md px-3 py-4 relative'>
          <span className='block w-6 h-6 rounded-full bg-violet-500'></span>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium'>Coolest User</p>
        </div>
        {/* Channels */}
        <div className='flex flex-col gap-3'>
          {channels.map((channel, index) => (
            <div
              key={index}
              className={cn('cursor-pointer px-4 py-2 rounded-md', channel.active ? 'bg-violet-200' : 'opacity-60 hover:opacity-100')}
            >
              {channel.name}
            </div>
          ))}
        </div>
        {/* Spacer */}
        <div className='flex-1' />
        {/* CTA */}
        <button className='bg-violet-500 text-white px-4 py-3 rounded-md'>+ Create a channel</button>
      </div>
    </div>
  );
};
