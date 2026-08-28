type MatterportEmbedProps = {
  url: string;
  title: string;
};

export default function MatterportEmbed({ url, title }: MatterportEmbedProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-sm border border-border bg-black"
      style={{ minHeight: '480px' }}
    >
      <iframe
        src={url}
        title={title}
        className="absolute inset-0 h-full min-h-[480px] w-full border-0"
        allow="xr-spatial-tracking; vr; gyroscope; accelerometer"
        allowFullScreen
      />
    </div>
  );
}
