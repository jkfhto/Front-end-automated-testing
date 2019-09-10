import SoundPlayerConsumer from './sound-player-consumer';
import SoundPlayer from './sound-player';

const mockPlaySoundFile = jest.fn();

//使用模块工厂参数调用jest.mock
jest.mock('./sound-player', () => {
	return jest.fn().mockImplementation(() => {
		return { playSoundFile: mockPlaySoundFile };
	});
});

beforeEach(() => {
	// 重置存储在mockFn.mock.calls和mockFn.mock.instances数组中的所有信息。
    //当你想在两个断言之间清理mock的使用数据时，这通常很有用
	SoundPlayer.mockClear();
	mockPlaySoundFile.mockClear();
});

it('检查SoundPlayerConsumer实例化了SoundPlayer类', () => {
	const soundPlayerConsumer = new SoundPlayerConsumer();
	//断言SoundPlayer执行了实例化  实际进行实例化的是  mock constructor
	expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('检查SoundPlayerConsumer是否调用了SoundPlayer实例上的方法', () => {
	const soundPlayerConsumer = new SoundPlayerConsumer();
	const coolSoundFileName = 'song.mp3';
	soundPlayerConsumer.playSomethingCool();
	//断言SoundPlayer实例的playSoundFile方法调用时传递的参数为'song.mp3'
	expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});