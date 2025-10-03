export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg" />
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-muted rounded-lg" />
                <div className="aspect-square bg-muted rounded-lg" />
                <div className="aspect-square bg-muted rounded-lg" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-20 bg-muted rounded" />
              <div className="h-12 bg-muted rounded w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
