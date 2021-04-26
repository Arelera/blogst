import Markdown from 'markdown-to-jsx'

export default function Markdowned({ children }) {
  return (
    <div className="markdown">
      <Markdown
        options={{
          overrides: {
            h2: {
              props: {
                className: 'md-h2',
              },
            },
            h3: {
              props: {
                className: 'md-h3',
              },
            },
            li: {
              props: {
                className: 'md-li',
              },
            },
            a: {
              props: {
                className: 'md-a',
              },
            },
            p: {
              props: {
                className: 'md-p',
              },
            },
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  )
}
