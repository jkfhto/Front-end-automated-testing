import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-player'); // SoundPlayer 是一个mock constructor

console.log('SoundPlayer', SoundPlayer.mock)

beforeEach(() => {
	// 重置存储在mockFn.mock.calls和mockFn.mock.instances数组中的所有信息。
    //当你想在两个断言之间清理mock的使用数据时，这通常很有用
	SoundPlayer.mockClear();
});

it('检查SoundPlayerConsumer实例化了SoundPlayer类', () => {
	const soundPlayerConsumer = new SoundPlayerConsumer();
	//断言SoundPlayer执行了实例化  实际进行实例化的是  mock constructor
	expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('检查SoundPlayerConsumer是否调用了SoundPlayer实例上的方法', () => {
	// 检查 mockClear() 会否起作用:
	expect(SoundPlayer).not.toHaveBeenCalled();

	const soundPlayerConsumer = new SoundPlayerConsumer();
	//断言SoundPlayer执行了实例化  实际进行实例化的是  mock constructor
	expect(SoundPlayer).toHaveBeenCalledTimes(1);

	const coolSoundFileName = 'song.mp3';
	soundPlayerConsumer.playSomethingCool();
	console.log('SoundPlayer.mock', SoundPlayer.mock.instances[0])
	// mock.instances is available with automatic mocks:
	const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];//mock实例对象
	const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;//实例对象playSoundFile方法
	expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);//断言SoundPlayer实例的playSoundFile方法调用时传递的参数为'song.mp3'
	// 等同于上面的expect
	expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);//断言SoundPlayer实例的playSoundFile方法调用时传递的参数为'song.mp3'
	expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);//断言SoundPlayer实例的playSoundFile方法被调用
});